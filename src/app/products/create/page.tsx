import CreateForm from "@/components/create-form";

const CreateProductPage = () => {
    return (
        <div className="max-w-md mx-auto wd-5">
            <h1 className="text-2xl text-center mb-2">Add New Product</h1>
            <CreateForm/>
        </div>
    )
}

export default CreateProductPage;