import React from "react";
import { useForm, Controller } from "react-hook-form";
import WYSIWYGEditor from "./component/WYSIWYG";

const App = () => {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
  });

  // Handle Data Submit to APi for SignUp
  const handleSubmitOnClick = ({ editor_content }) => {
    console.log(editor_content);
  };

  return (
    <section>
      <h1>Text Editor</h1>
      <form onSubmit={handleSubmit(handleSubmitOnClick)}>
        <Controller
          name="editor_content"
          control={control}
          render={({ field }) => {
            return (
              <WYSIWYGEditor value={field.value} onChange={field.onChange} />
            );
          }}
        />

        <button type="submit" className="signup-button">
          Next
        </button>
      </form>
    </section>
  );
};
export default App;
