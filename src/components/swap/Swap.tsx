import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SwapTab } from "./SwapTab";
import { SwapProps } from "./types";

export function Swap({ mint }: SwapProps) {
  return (
    <div className="p-4 border rounded-lg space-y-4">
      <Tabs defaultValue="buy" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="sell">Sell</TabsTrigger>
        </TabsList>
        <TabsContent value="buy" className="space-y-4">
          <SwapTab mint={mint} type="buy" decimals={6} />
        </TabsContent>
        <TabsContent value="sell" className="space-y-4">
          <SwapTab mint={mint} type="sell" decimals={9} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
