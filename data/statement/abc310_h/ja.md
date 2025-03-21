配点 : $625$ 点

## 問題文

あなたの目の前に体力 $H$ の魔物が出現しました。
現在のあなたの魔力は $0$ です。

あなたは技 $1$ 、技 $2$ 、$\ldots$ 、技 $N$ という $N$ 種類の技を好きな順番で何回でも使うことができます。

$i = 1, 2, \ldots, N$ について、技 $i$ はあなたの魔力が $C_i$ 以上のときにのみ使用することができ、
使用するとあなたの魔力が $C_i$ だけ減り魔物の体力が $D_i$ だけ減ります。
ただし、$C_i$ が負の場合、あなたの魔力が $C_i$ だけ減るということは、あなたの魔力が $-C_i$ だけ増加するということを意味します。

魔物の体力が $0$ 以下になるまでにあなたが技を使う回数としてあり得る最小値を出力してください。
なお、本問題の制約下において、有限回の技の使用によって魔物の体力を $0$ 以下にできることが保証されます（下記の制約を参照）。

## 制約

- $1 \leq N \leq 300$
- $1 \leq H \leq 10^{18}$
- $-300 \leq C_i \leq 300$
- ある $1 \leq i \leq N$ が存在して $C_i \leq 0$
- $1 \leq D_i \leq 10^9$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $H$
> 
> $C_1$ $D_1$
> 
> $C_2$ $D_2$
> 
> $\vdots$
> 
> $C_N$ $D_N$

## 出力

答えを出力せよ。

```input1
3 48
3 20
-4 2
1 5
```

```output1
5
```

あなたの魔力が $0$ 、魔物の体力が $48$ である初期状態から、下記の手順で技を使うことを考えます。

- 技 $2$ を使用する。その結果、あなたは魔力は $4$ に、魔物の体力は $46$ になる。
- 技 $3$ を使用する。その結果、あなたは魔力は $3$ に、魔物の体力は $41$ になる。
- 技 $1$ を使用する。その結果、あなたは魔力は $0$ に、魔物の体力は $21$ になる。
- 技 $2$ を使用する。その結果、あなたは魔力は $4$ に、魔物の体力は $19$ になる。
- 技 $1$ を使用する。その結果、あなたは魔力は $1$ に、魔物の体力は $-1$ になる。

この場合、魔物の体力が $0$ 以下になるまでにあなたが技を使う回数は $5$ 回であり、これがあり得る最小値です。

```input2
20 583988303060450752
-64 273760634
-238 960719353
-114 191410838
-250 357733867
232 304621362
-286 644706927
210 37849132
-230 556412112
-142 136397527
101 380675202
-140 152300688
190 442931589
-187 940659077
-12 312523039
32 126515475
-143 979861204
105 488280613
240 664922712
290 732741849
69 541282303
```

```output2
595990842
```