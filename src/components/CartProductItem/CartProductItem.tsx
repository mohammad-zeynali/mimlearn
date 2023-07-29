import { Link } from "react-router-dom";

const CartProductItem = (): JSX.Element => {
  return (
    <tr className="mt-5 border-b-2 border-fourth sm:border-none">
      <td className="block sm:flex sm:items-center pt-4 pb-4">
        <span className="text-red-500 font-vazirBold text-lg pl-4 sm:pl-0 cursor-pointer">
          x
        </span>
        <Link to="/courses">
          <img
            className="w-20 object-cover mr-8 hidden sm:block"
            src="../assets/images/products/product-1.png"
            alt=""
          />
        </Link>
      </td>
      <td className="flex justify-between items-center w-full border-b border-fourth sm:border-none sm:w-auto sm:table-cell pt-4 pb-4">
        <span className="font-vazirBold sm:hidden">محصول</span>
        <div>
          <Link to="/courses" className="transition-all hover:text-primary">
            آموزش امنیت در وردپرس
          </Link>
        </div>
      </td>
      <td className="flex justify-between items-center w-full border-b border-fourth sm:border-none sm:w-auto sm:table-cell pt-4 pb-4">
        <span className="font-vazirBold sm:hidden">قیمت :</span>
        <div className="">
          <h6 className="text-xs inline">119,000 </h6>
          <span className="pr-1">تومان</span>
        </div>
      </td>
      <td className="flex justify-between items-center w-full border-b border-fourth sm:border-none sm:w-auto sm:table-cell pt-4 pb-4">
        <span className="font-vazirBold sm:hidden">تعداد :</span>
        <div className="">
          <input
            id="productCount"
            type="number"
            className="shadow-[0px_6px_6px_2px_rgba(0,0,0,.06)] focus:outline-none w-14 h-12 rounded-lg p-2"
            value={1}
            min={0}
            max={10}
          />
        </div>
      </td>
      <td className="flex justify-between items-center w-full border-b border-fourth sm:border-none sm:w-auto sm:table-cell pt-4 pb-4">
        <span className="font-vazirBold sm:hidden">جمع:</span>
        <div className="">
          <h6 className="text-xs inline">119,000 </h6>
          <span className="pr-1">تومان</span>
        </div>
      </td>
    </tr>
  );
};

export default CartProductItem;
