"use client"
import CountButton from './CountButton';
import CountButton2 from './CountButton2';
import ProductTable from './ProductTable';

export default function Page() {
    return (
        <div>
            <CountButton />
            <CountButton2 />
            <div>
                <a href="https://github.com/alex-maliziola/NextStuff" target="_blank" rel="noopener noreferrer">
                    Visit My GitHub Repo
                </a>
            </div>
            <ProductTable />
        </div>
    );
}