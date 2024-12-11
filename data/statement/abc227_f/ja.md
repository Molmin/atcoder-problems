配点 : $500$ 点

## 問題文

縦 $H$ 行、横 $W$ 列のマス目があります。上から $i$ 行目、左から $j$ 列目のマスを $(i,j)$ と書くことにします。$(i,j)$ には整数 $A_{i,j}$ が書かれています。

高橋君は $(1,1)$ を出発し、$(H,W)$ にたどり着くまで、$1$ つ右あるいは $1$ つ下のマスへ移動することを繰り返します。ただし、マス目の外に出ることはできません。

この時、移動のコストを以下のように定義します。

通った $H+W-1$ 個のマスに書かれた整数のうち大きい方 $K$ 個の和

コストとしてありうる最小値を求めてください。

## 制約

- $1 \leq H,W \leq 30$
- $1 \leq K &lt; H+W$
- $1 \leq A_{i,j} \leq 10^9$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $H$ $W$ $K$
> 
> $A_{1,1}$ $A_{1,2}$ $\ldots$ $A_{1,W}$
> 
> $A_{2,1}$ $A_{2,2}$ $\ldots$ $A_{2,W}$
> 
> $\vdots$
> 
> $A_{H,1}$ $A_{H,2}$ $\ldots$ $A_{H,W}$

## 出力

答えを出力せよ。

```input1
1 3 2
3 4 5
```

```output1
9
```

移動の方法は一通りのみであり、通ったマスに書かれた整数は大きい方から順に $5$、$4$、$3$ となるので、$9(=5+4)$ を出力します。

```input2
2 2 1
3 2
4 3
```

```output2
3
```

$(1,1)$、$(1,2)$、$(2,2)$ の順に通った時コストが最小となります。

```input3
3 5 3
4 7 8 6 4
6 7 3 10 2
3 8 1 10 4
```

```output3
21
```