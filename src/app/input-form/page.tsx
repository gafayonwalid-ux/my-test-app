async function findvalueapi() {
  
}

export default async function InputFormPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const data = await res.json()
  console.table(data);

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}