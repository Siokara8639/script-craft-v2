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
monaco.languages
.registerCompletionItemProvider(
  "lua",

  {

    provideCompletionItems: () => {

      return {

        suggestions: [

          {

            label:
              "Players",

            kind:
              monaco.languages
              .CompletionItemKind.Module,

            insertText:
              'game:GetService("Players")'
          },

          {

            label:
              "TweenService",

            kind:
              monaco.languages
              .CompletionItemKind.Module,

            insertText:
              'game:GetService("TweenService")'
          }

        ]
      };
    }
  }
);
const messages =
document.getElementById(
  "messages"
);

const chatInput =
document.getElementById(
  "chatInput"
);

function addMessage(
  text,
  type
){

  const div =
  document.createElement("div");

  div.style.marginTop =
  "10px";

  div.style.padding =
  "10px";

  div.style.borderRadius =
  "10px";

  div.style.background =
  type === "user"
  ? "#333"
  : "#1b1b1b";

  div.textContent =
  text;

  messages.appendChild(div);

  messages.scrollTop =
  messages.scrollHeight;
}

document
.getElementById("sendBtn")
.onclick = () => {

  const text =
  chatInput.value;

  if(!text) return;

  addMessage(text, "user");

  chatInput.value = "";

  setTimeout(() => {

    addMessage(
      "AI response...",
      "ai"
    );

  }, 500);
};
