配点 : $2000$ 点

## 問題文

無向木 $t$ に対して，有理数 $f(t)$ を次のように定義します．

- $t$ の頂点数を $n$ とする．
- $n=1$ のとき：$f(t)=1$ とする．
- $n \geq 2$ のとき：-   - $t$ の辺 $e$ について，$t$ から $e$ を削除することで得られる $2$ つの木を $t_x(e),t_y(e)$ （順不同）で表す．
-   - $f(t)=(\sum_{e \in t} f(t_x(e)) \times f(t_y(e)))/n$ とする．

$1$ から $N$ までの番号のついた $N$ 頂点からなる木 $T$ が与えられます．
$i$ 番目の辺は頂点 $A_i$ と頂点 $B_i$ を結ぶ辺です．

$f(T)$ の値を $\text{mod }{998244353}$ で求めてください．

有理数 $\text{mod }{998244353}$ の定義

この問題の制約のもとでは、求める有理数を既約分数 $\frac{P}{Q}$ で表した時、$Q \neq 0 \pmod{998244353}$ となることが証明できます。 よって、$R \times Q \equiv P \pmod{998244353}, 0 \leq R &lt; 998244353$ を満たす整数 $R$ が一意に定まります。 この $R$ を答えてください。

## 制約

- $2 \leq N \leq 5000$
- $1 \leq A_i,B_i \leq N$
- 入力されるグラフは木である

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_{N-1}$ $B_{N-1}$

## 出力

答えを出力せよ．

```input1
2
1 2
```

```output1
499122177
```

$f(T)=1/2$ です．

```input2
3
1 2
2 3
```

```output2
332748118
```

$f(T)=1/3$ です．

```input3
4
1 2
2 3
3 4
```

```output3
103983787
```

```input4
10
4 5
1 9
6 1
8 4
5 9
4 7
3 10
5 2
4 3
```

```output4
462781191
```