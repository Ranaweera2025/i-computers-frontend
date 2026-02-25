import ProductCard from "./productCard";

export default function TrendingProduct() {

    return(
        <div>
            <h1>Trending Products</h1>

            <ProductCard name="i phone" price="$1,299" image="https://picsum.photos/id/3/200/300"></ProductCard>
            <ProductCard name="i pad" price="$1,299" image="https://picsum.photos/id/4/200/300"></ProductCard>
            <ProductCard name="i mac" price="$1,299" image="https://picsum.photos/id/5/200/300"></ProductCard>
        </div>
    )
}