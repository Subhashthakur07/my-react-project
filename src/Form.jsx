function handleSubmitForm(event)
{
    event.preventDefault();
    console.log("form was submitted");
}
export default function Form()
{
    return(
        <form onSubmit={handleSubmitForm}>
            <input type="text" placeholder="type something" />
            <button>submit</button>
        </form>
    );
}