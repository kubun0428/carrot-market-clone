<script>
    import { getDatabase, ref, push } from "firebase/database";
    import Footer from "../components/Footer.svelte";
    import { getStorage, ref as refImage, uploadBytes, getDownloadURL } from "firebase/storage";

    // 글 처리하는 부분

    let title;
    let price;
    let description;
    let place;
    let files;
    const db = getDatabase();
    const storage = getStorage();

    async function writeData(imgURL) {
        push(ref(db, "items/"), {
            title, price, description, place, insertAt:new Date().getTime(), imgURL,
        });
        window.location.hash="/"
    }

    // 이미지 처리하는 부분

    async function resizeImage(file) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const size = 120;  // 가로세로 120px로 설정
                canvas.width = size;
                canvas.height = size;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, size, size);
                ctx.canvas.toBlob(
                    (blob) => {
                    const resizedFile = new File([blob], file.name, {
                        type: 'image/jpeg',
                        lastModified: Date.now(),
                    });
                    resolve(resizedFile);
                    },
                    'image/jpeg', // 압축 형식
                    0.9 // 이미지 품질 설정
                );
            };
            img.onerror = reject;
        });
    }


    
    const uploadFile = async () =>{
        const file = files[0];
        const resizedFile = await resizeImage(file)
        const imgRef = refImage(storage, file.name);
        const res = await uploadBytes(imgRef, resizedFile);
        const url = await getDownloadURL(imgRef);
        return url;
    };

    // 글 업로드
    const handleSubmit = async () => {
        const url = await uploadFile();
        writeData(url);
    }

</script>
<div id = title_top>Posting Page</div>
<form id="write-form" on:submit|preventDefault={handleSubmit}>
    <div>
      <label for="image">Image</label>
      <input type="file" bind:files={files} id="image" name="image" />
    </div>
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" name="title" bind:value={title}/>
    </div>
    <div>
      <label for="price">Price</label>
      <input type="number" id="price" name="price" bind:value={price}/>
    </div>
    <div>
      <label for="description">Description</label>
      <input type="text" id="description" name="description" bind:value={description}/>
    </div>
    <div>
      <label for="place">Location</label>
      <input type="text" id="place" name="place" bind:value={place}/>
    </div>
    <div>
      <input type="submit" value = "Post!"/>
    </div>
</form>

<Footer location="write"/>

<style>
  #title_top {
    font-size: 20px;
    text-align: center;
    color: #333;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  }
  #write-form {
    max-width: 800px;
    margin: 20px auto;
    padding: 30px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  #write-form div {
    margin-bottom: 20px;
  }

  label {
    display: block;
    font-size: 18px;
    color: #444;
    margin-bottom: 10px;
  }

  input[type="text"],
  input[type="number"] {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type="file"] {
    border: none;
  }

  #description {
    min-height: 200px;
    font-family: 'Georgia', serif;
  }

  input[type="submit"] {
    background-color: #ff6e00;
    color: white;
    padding: 12px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
  }

  input[type="submit"]:hover {
    background-color: #ec904a;
  }
</style>
