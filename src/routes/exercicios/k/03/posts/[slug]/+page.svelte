<script>
    let { data } = $props();
  </script>
  
  <h1>{data.post.title}</h1>
  <sub>Em {data.post.publish_date}</sub>
  <p>{data.post.content}</p>