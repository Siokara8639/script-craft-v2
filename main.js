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
enableCopyButtons();
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
chatInput
.addEventListener(

  "keydown",

  (e) => {

    if(
      e.key === "Enter" &&
      !e.shiftKey
    ){

      e.preventDefault();

      document
      .getElementById(
        "sendBtn"
      )
      .click();
    }
  }
);
function enableCopyButtons(){

  document
  .querySelectorAll("pre")
  .forEach((block) => {

    if(
      block.dataset.copyReady
    ) return;

    block.dataset.copyReady = true;

    const button =
    document.createElement(
      "button"
    );

    button.textContent =
    "コピー";

    button.style.marginBottom =
    "5px";

    button.onclick = () => {

      navigator.clipboard
      .writeText(
        block.innerText
      );

      button.textContent =
      "コピー済み";

      setTimeout(() => {

        button.textContent =
        "コピー";

      }, 1000);
    };

    block.prepend(button);
  });
}
