配点 : $450$ 点

## 問題文

$1$ から $N$ までの番号が付けられた $N$ 個の商品がベルトコンベア上を流れています。
ベルトコンベアには印字機が取り付けられており、商品 $i$ は今から $T_i$ [μs] 後に印字機の範囲に入り、その $D_i$ [μs] 後に印字機の範囲から出ます。

キーエンスの印字機は、印字機の範囲内にある商品 $1$ つに一瞬で印字することができます（特に、商品が印字機の範囲に入る瞬間や範囲から出る瞬間に印字することも可能です）。
ただし、$1$ 度印字すると、次に印字するまでに $1$ [μs] のチャージ時間が必要です。
印字機が印字をする商品とタイミングをうまく選んだとき、最大で何個の商品に印字することができますか？

## 制約

- $1\leq N \leq 2\times 10^5$
- $1\leq T_i,D_i \leq 10^{18}$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $T_1$ $D_1$
> 
> $T_2$ $D_2$
> 
> $\vdots$
> 
> $T_N$ $D_N$

## 出力

印字機が印字することのできる商品の数の最大値を出力せよ。

```input1
5
1 1
1 1
2 1
1 2
1 4
```

```output1
4
```

以下、今から $t$ [μs] 後のことを単に時刻 $t$ とよびます。

例えば、次のようにして $4$ 個の商品に印字することができます。

- 時刻 $1$ : 商品 $1,2,4,5$ が印字機の範囲に入る。商品 $4$ に印字する。
- 時刻 $2$ : 商品 $3$ が印字機の範囲に入り、商品 $1,2$ が印字機の範囲から出る。商品 $1$ に印字する。
- 時刻 $3$ : 商品 $3,4$ が印字機の範囲から出る。商品 $3$ に印字する。
- 時刻 $4.5$ : 商品 $5$ に印字する。
- 時刻 $5$ : 商品 $5$ が印字機の範囲から出る。

$5$ 個の商品すべてに印字することはできないため、答えは $4$ です。

```input2
2
1 1
1000000000000000000 1000000000000000000
```

```output2
2
```

```input3
10
4 1
1 2
1 4
3 2
5 1
5 1
4 1
2 1
4 1
2 4
```

```output3
6
```