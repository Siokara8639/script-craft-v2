require.config({

  paths: {

    vs:
"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs"

  }
});

require(["vs/editor/editor.main"], () => {

  monaco.editor.create(

    document.getElementById(
      "editor"
    ),

    {

      value:
`print("Hello Roblox")`,

      language:"lua",

      theme:"vs-dark",

      automaticLayout:true
    }
  );
});
