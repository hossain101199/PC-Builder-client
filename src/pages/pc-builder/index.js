import RootLayout from "@/layout/RootLayout";
import React from "react";
import CategoryCard from "@/components/atoms/CategoryCard";
import ProductCard from "@/components/atoms/ProductCard";
import { useSelector } from "react-redux";
import useModal from "@/hooks/useModal";
import Modal from "@/components/atoms/Modal";

const PcBuilderPage = ({ categories }) => {
  const { totalPrice, products } = useSelector((state) => state.pcBuilder);

  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  return (
    <>
      <div className="rounded-lg p-4 w-full bg-base-100 shadow-xl overflow-hidden flex justify-between items-center">
        <p>Select Your Components</p> <p>total TK {totalPrice}</p>
        <button
          className="btn btn-secondary"
          disabled={!(products?.length >= 6)}
          onClick={handleOpenModal}
        >
          Complete Build
        </button>
      </div>

      {categories?.data.map((category) => {
        const matchingProduct = products?.find(
          (product) => product.category === category.title
        );

        if (matchingProduct) {
          return (
            <ProductCard
              key={category.id}
              data={matchingProduct}
              isSelected={true}
            />
          );
        } else {
          return <CategoryCard key={category.id} isPcBuilder data={category} />;
        }
      })}

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          className="rounded-lg p-4 bg-base-100 shadow-xl overflow-hidden flex flex-col gap-2"
        >
          <h1 className="text-lg font-bold text-center">
            Congratulations! <br />
            Your PC Build is Complete!
          </h1>
          {products?.map((product) => (
            <p key={product.title}>
              {" "}
              <span className="font-semibold">{product?.category}: </span>{" "}
              {product?.title}
            </p>
          ))}

          <p>
            <span className="font-semibold">Total Price: </span> {totalPrice}
          </p>
          <button onClick={handleCloseModal} className="btn btn-success">
            DONE
          </button>
        </Modal>
      )}
    </>
  );
};

export const getStaticProps = async () => {
  const categoryResponse = await fetch(
    "https://pc-builder-service-hossain101199.vercel.app/api/v1/categories"
  );
  const categories = await categoryResponse.json();

  return { props: { categories } };
};

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default PcBuilderPage;
