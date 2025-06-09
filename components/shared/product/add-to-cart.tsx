"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { Cart, CartItem } from "@/types";

import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";

import { toast } from "sonner";
import { Loader, Minus, Plus } from "lucide-react";

const AddToCart = ({ item, cart }: { item: CartItem; cart?: Cart }) => {
  const router = useRouter();

  const [isAddPending, startAddTransition] = useTransition();
  const [isRemovePending, startRemoveTransition] = useTransition();

  const handleAddToCart = async () => {
    startAddTransition(async () => {
      const res = await addItemToCart(item);

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message, {
        action: {
          label: "Go to Cart",
          onClick: () => router.push("/cart"),
        },
      });
      return;
    });
  };

  const handleRemoveFromCart = async () => {
    startRemoveTransition(async () => {
      const res = await removeItemFromCart(item.productId);

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message, {
        action: {
          label: "Go to Cart",
          onClick: () => router.push("/cart"),
        },
      });
      return;
    });
  };

  // Check if item is in cart
  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  return existItem ? (
    <div>
      <Button type="button" variant="outline" onClick={handleRemoveFromCart}>
        {isRemovePending ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Minus className="w-4 h-4" />
        )}
      </Button>
      <span className="px-2">{existItem.qty}</span>
      <Button type="button" variant="outline" onClick={handleAddToCart}>
        {isAddPending ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Plus className="w-4 h-4" />
        )}
      </Button>
    </div>
  ) : (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      {isAddPending ? (
        <Loader className="w-4 h-4 animate-spin" />
      ) : (
        <Plus className="w-4 h-4" />
      )}
      Add to Cart
    </Button>
  );
};

export default AddToCart;
