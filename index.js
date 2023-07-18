const url = "https://jsonplaceholder.typicode.com";

const getUser = async (id) => {
  const res = await fetch(`${url}/users?id=${id}`);
  const user = (await res.json())[0];

  return user;
};

const getPosts = async (user) => {
  const res = await fetch(`${url}/posts?userId=${user.id}&_limit=3`);
  const posts = await res.json();

  return posts;
};

const getCommentsForEachPost = async (posts) => {
  const res = await Promise.all(
    posts.map((post) => fetch(`${url}/comments?postId=${post.id}&_limit=4`))
  );
  console.log(res);
  const postComments = await Promise.all(res.map((r) => r.json()));

  postComments.forEach((comments, i) => (posts[i].comments = comments));
};

const renderHtml = (user, posts) => {
  const content = document.getElementById("content");
  content.innerHTML += `<h3>Posts del usuario ${user.email}</h3>`;

  posts.forEach((post) => {
    content.innerHTML += `
    <div class="post">
      <h4>${post.title}</h4>
      <p>${post.body}</p>
      <br>
      ${post.comments
        .map((c) => `<p><span>${c.email}:</span>${c.body}</p>`)
        .join("")}
    </div>
    `;
  });
};

const getBlogContent = async () => {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user);
    await getCommentsForEachPost(posts);

    renderHtml(user, posts);
  } catch (err) {
    console.log(err);
  }
};

getBlogContent();

const loadAdds = () => {
  console.log("Adds loaded");
};

const affiliateRedirect = () => {
  // resolver el bug
};

// test commit

// cambio 1
// cambio 2
// cambio 3

// cambios videos 1
// cambios videos 2
// cambios videos 3

// El archivo index.js contiene un código JavaScript que parece ser una funcionalidad para obtener datos de una API y mostrarlos en la página web.

// Aquí hay un resumen del código en el archivo index.js:

//     Se define una constante url que apunta a la URL base de una API (https://jsonplaceholder.typicode.com).
//     Luego, se definen varias funciones asincrónicas (getUser, getPosts, getCommentsForEachPost, renderHtml, y getBlogContent) que utilizan la función fetch para hacer solicitudes a la API y obtener datos de usuarios, publicaciones y comentarios.
//     La función renderHtml se encarga de generar el contenido HTML basado en los datos obtenidos de la API y actualizar el elemento con el ID "content" en la página web.
//     La función getBlogContent es la función principal que se ejecuta para obtener los datos del usuario, las publicaciones y los comentarios, y luego renderiza el contenido en la página web.
//     El archivo también contiene algunas funciones y comentarios adicionales relacionados con carga de anuncios y redireccionamiento de afiliados.

// Además, mencionas que tienes un archivo style.css, que contiene estilos CSS para dar formato a la página web, y una carpeta "img" que contiene una imagen llamada "git.png".