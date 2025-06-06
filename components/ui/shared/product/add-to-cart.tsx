"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { CartItem } from "@/types";

import { addItemToCart } from "@/lib/actions/cart.actions";

import { toast } from "sonner";
import { Plus } from "lucide-react";

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();

  // const {toast} = useToast()

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    toast.success(`${item.name} added to cart`, {
      action: {
        label: "Go to Cart",
        onClick: () => router.push("/cart"),
      },
    });
  };

  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <Plus />
      Add to Cart
    </Button>
  );
};

export default AddToCart;
