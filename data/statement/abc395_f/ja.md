配点 : $500$ 点

## 問題文

高橋くんには歯が $2N$ 本あり、$N$ 本は上の歯、残りの $N$ 本は下の歯です。

左から $i$ 本目 $(1\leq i\leq N)$ の上の歯の長さは $U _ i$ で、左から $i$ 本目 $(1\leq i\leq N)$ の下の歯の長さは $D _ i$ です。

高橋くんの歯が次の $2$ つの条件をどちらも満たしているとき、歯が「うまく噛み合っている」ということにします。

- ある整数 $H$ が存在し、$1\leq i\leq N$ を満たすすべての整数 $i$ について、$U _ i+D _ i=H$ が成り立つ。
- $1\leq i\lt N$ を満たすすべての整数 $i$ について、$\vert U _ i-U _ {i+1}\vert\leq X$ が成り立つ。

高橋くんは次の操作を好きなだけ繰り返すことができます。

- $1$ 円を支払って歯削り機を使い、長さが正であるような歯を $1$ つ選んでその歯の長さを $1$ 減らす。

この操作以外の方法で歯の長さを変えることはできません。

高橋くんが歯をうまく噛み合わせるために支払うことになる最小の金額を求めてください。

## 制約

- $2\leq N\leq2\times10 ^ 5$
- $1\leq U _ i\leq10 ^ 9\ (1\leq i\leq N)$
- $1\leq D _ i\leq10 ^ 9\ (1\leq i\leq N)$
- $1\leq X\leq10 ^ 9$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $X$
> 
> $U _ 1$ $D _ 1$
> 
> $U _ 2$ $D _ 2$
> 
> $\vdots$
> 
> $U _ N$ $D _ N$

## 出力

答えを出力せよ。

```input1
4 3
3 1
4 1
5 9
2 6
```

```output1
15
```

はじめ、高橋くんのそれぞれの歯の高さは以下のようになっています。

![](https://img.atcoder.jp/abc395/37264cf2f8fbc7d9e0f698b6181c804e.png)

たとえば、以下のようにして高橋くんの歯をうまく噛み合わせることができます。

![](https://img.atcoder.jp/abc395/eeb6b57fa9d9b6577f264baba37644c5.png)

$15$ 円を支払うことでそれぞれの歯をこの長さにすることができます。

$14$ 円以下を支払って高橋くんの歯をうまく噛み合わせることはできないため、`15` を出力してください。

```input2
4 1000000000
3 3
3 3
3 3
3 3
```

```output2
0
```

歯の長さを変えなくてもうまく噛み合っている場合があります。

```input3
4 1
1000000000 1000000000
1000000000 1000000000
1000000000 1000000000
1 1
```

```output3
5999999994
```

答えが $32\operatorname{bit}$ 整数に収まらない場合があることに注意してください。

```input4
15 128
748 169
586 329
972 529
432 519
408 587
138 249
656 114
632 299
984 755
404 772
155 506
832 854
353 465
387 374
567 385
```

```output4
9460
```