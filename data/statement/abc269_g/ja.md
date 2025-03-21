配点 : $600$ 点

## 問題文

$1$ から $N$ までの番号がついた $N$ 枚のカードがあります。<br>
カード $i$ の表には整数 $A_i$, 裏には整数 $B_i$ が書いてあります。  また、$\sum_{i=1}^N (A_i + B_i) = M$ です。<br>
$k=0,1,2,...,M$ について次の問題を解いてください。

$N$ 枚のカードがすべて表側が見える状態で並べられています。あなたは $0$ 枚以上 $N$ 枚以下のカードを選び、それらを裏返すことができます。<br>
見えている数の和が $k$ になるには最小で何枚のカードを裏返す必要がありますか？枚数を出力してください。<br>
ただし、どのようにカードを裏返しても見えている数の和が $k$ にならない場合は $-1$ を出力してください。

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq M \leq 2 \times 10^5$
- $0 \leq A_i, B_i \leq M$
- $\sum_{i=1}^N (A_i + B_i) = M$
- 入力される値はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$ 
> 
> $A_N$ $B_N$

## 出力

$M+1$ 行出力せよ。$i$ 行目には $k=i-1$ のときの答えを出力せよ。

```input1
3 6
0 2
1 0
0 3
```

```output1
1
0
2
1
1
3
2
```

例えば $k=0$ のときは、カード $2$ のみを裏返せば見えている数の和を $0+0+0=0$ にすることができて、これが最適です。<br>
また、$k=5$ のときは、すべてのカードを裏返せば見えている数の和を $2+0+3=5$ にすることができて、これが最適です。

```input2
2 3
1 1
0 1
```

```output2
-1
0
1
-1
```

```input3
5 12
0 1
0 3
1 0
0 5
0 2
```

```output3
1
0
1
1
1
2
1
2
2
2
3
3
4
```