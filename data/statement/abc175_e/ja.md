配点 : $500$ 点

## 問題文

$R$ 行 $C$ 列に並んだマス目に $K$ 個のアイテムが置いてあります。$1 \leq i \leq R$ 行目、 $1 \leq j \leq C$ 列目のマスを $(i, j)$ と表すとき、$i$ 番目のアイテムはマス $(r_i, c_i)$ に存在し、その価値は $v_i$ です。

高橋君はマス $(1, 1)$ からスタートしてゴールのマス $(R, C)$ まで移動します。高橋君はマス $(i, j)$ にいるとき、次には (存在すれば) マス $(i + 1, j)$ またはマス $(i, j + 1)$ に移動することができます。

高橋君は通ったマス (スタートとゴールも含む) のアイテムを拾うことができます。ただし、マス目の同じ行では $3$ 個までしかアイテムを拾うことができません。通ったマスにアイテムがある場合に、そのアイテムを拾わないことはできます。

高橋君が拾うことのできるアイテムの価値の合計としてありうる値の最大値を求めてください。

## 制約

- $1 \leq R, C \leq 3000$
- $1 \leq K \leq \min(2 \times 10^5, R \times C)$
- $1 \leq r_i \leq R$
- $1 \leq c_i \leq C$
- $(r_i, c_i) \neq (r_j, c_j) (i \neq j)$
- $1 \leq v_i \leq 10^9$
- 入力は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $R$ $C$ $K$
> 
> $r_1$ $c_1$ $v_1$
> 
> $r_2$ $c_2$ $v_2$
> 
> $:$
> 
> $r_K$ $c_K$ $v_K$

## 出力

高橋君が拾うことのできるアイテムの価値の合計としてありうる値の最大値を出力せよ。

```input1
2 2 3
1 1 3
2 1 4
1 2 5
```

```output1
8
```

移動の方法は以下の $2$ 通りあります。

- マス $(1, 1)$ 、マス $(1, 2)$、マス $(2, 2)$ の順に移動する。このとき拾うことのできるアイテムの価値の合計は $3 + 5 = 8$ である。
- マス $(1, 1)$ 、マス $(2, 1)$、マス $(2, 2)$ の順に移動する。このとき拾うことのできるアイテムの価値の合計は $3 + 4 = 7$ である。

よって、高橋君が拾うことのできるアイテムの価値の合計としてありうる値の最大値は $8$ です。

```input2
2 5 5
1 1 3
2 4 20
1 2 1
1 3 4
1 4 2
```

```output2
29
```

$1$ 行目にアイテムが $4$ 個あります。次のように移動してアイテムを拾う方法が最適です。

- マス $(1, 1)$ 、マス $(1, 2)$、マス $(1, 3)$、マス $(1, 4)$ 、マス $(2, 4)$、マス $(2, 5)$ の順に移動する。このうちマス $(1, 2)$ にあるアイテムのみ拾わないことにすると、アイテムの価値の合計は $3 + 4 + 2 + 20 = 29$ である。

```input3
4 5 10
2 5 12
1 5 12
2 3 15
1 2 20
1 1 28
2 4 26
3 2 27
4 5 21
3 5 10
1 3 10
```

```output3
142
```