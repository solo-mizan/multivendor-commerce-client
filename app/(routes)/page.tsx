import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard('50b5ac37-23b8-452a-82d6-1b33d31df33f');
    const products = await getProducts({isFeatured: true});

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList
                    title="Featured products"
                    items={products}
                />
            </div>
        </Container>
    )


}
 
export default HomePage;