import Layout from "../layouts/layouts.astro";
import { title } from "./index.astro";

<Fragment>
  {/** sama seperti laravel template engine nya, saya suka.. */}
  {/** Memanggil layout yang ada pada file layouts.astro agar bisa menggunakan slot */}
  {/** Bisa melempar parameter dengan menggunakan cara seperti dibawah ini, sama seperti react js */}
  <Layout title={title}>
    {/** Memanggil variable sama seperti react */}
    <a href="about" class="link">
      about
    </a>
  </Layout>

  <style>{`
  .link {
    padding: 20px;
    text-decoration: none;
  }
  {
	
  }
`}</style>
</Fragment>;
