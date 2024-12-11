配点 : $600$ 点

## 問題文

$N$ 頂点単純無向グラフ $G$ が与えられます。

$G$ は $N$ 行 $N$ 列の隣接行列 $A$ によって与えられます。つまり、$A_{i,j}$ が $1$ である場合は頂点 $i,j$ 間に辺があることを、$0$ である場合には辺がないことを意味します。

$1 \le i &lt; j &lt; k \le N$ を満たす整数の組 $(i,j,k)$ のうち、頂点 $i,j$ 間にも頂点 $j,k$ 間にも頂点 $i,k$ 間にも辺があるようなものの個数を求めてください。

## 制約

- $3 \le N \le 3000$
- $A$ は単純無向グラフ $G$ の隣接行列である。
- 入力はすべて整数。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_{1,1}A_{1,2}\dots A_{1,N}$
> 
> $A_{2,1}A_{2,2}\dots A_{2,N}$
> 
> $\vdots$
> 
> $A_{N,1}A_{N,2}\dots A_{N,N}$

## 出力

答えを出力せよ。

```input1
4
0011
0011
1101
1110
```

```output1
2
```

$(i,j,k)=(1,3,4),(2,3,4)$ が条件を満たします。

$(i,j,k)=(1,2,3)$ は、頂点 $1,2$ 間に辺がないため条件を満たしません。

よって、解は $2$ です。

```input2
10
0000000000
0000000000
0000000000
0000000000
0000000000
0000000000
0000000000
0000000000
0000000000
0000000000
```

```output2
0
```