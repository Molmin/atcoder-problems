配点 : $500$ 点

## 問題文

$2N$ 人の生徒が一列に並んでおり、左から順に生徒 $1$ , 生徒 $2$ , $\ldots$ , 生徒 $2N$ と番号が付いています。
$2N$ 人の生徒はどの $2$ 人も互いに仲が良いか悪いかのどちらかであり、
具体的には $1\leq i\leq M$ について生徒 $A_i$ と生徒 $B_i$ の仲が良く、これら以外のどの $2$ 人も仲が悪いです。

先生は以下の操作を $N$ 回繰り返して、 $2$ 人組のペアを $N$ 組作ることにしました。

- 隣り合う $2$ 人であって仲が良いような $2$ 人をペアとして選び、列から抜く。
- 抜けた $2$ 人が列の端でなかったならば、その後、列を詰める。すなわち、抜けた $2$ 人の左右にいた $2$ 人が新しく隣り合う。

このとき、 $N$ 回の操作方法としてあり得るものの数を $998244353$ で割った余りを求めてください。
ただし $N$ 回の操作方法が異なるとは、ある $1\leq i\leq N$ が存在して、 $i$ 回目の操作で
選ばれた $2$ 人組がペアとして異なることをいいます。

## 制約

- $1 \leq N \leq 200$
- $0 \leq M \leq N(2N-1)$
- $1 \leq A_i &lt; B_i \leq 2N$
- $(A_i, B_i)$ はすべて異なる。
- 入力は全て整数である。

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
> $A_M$ $B_M$

## 出力

操作方法としてあり得るものの数を $998244353$ で割った余りを出力せよ。

```input1
2 3
1 2
1 4
2 3
```

```output1
1
```

$1$ 度目の操作で生徒 $2$ と生徒 $3$ を選び、
 $2$ 度目の操作で生徒 $1$ と生徒 $4$ を選ぶのが
唯一の操作方法です。
 $1$ 度目の操作で生徒 $1$ と生徒 $2$ を選ぶと、
生徒 $3$ と生徒 $4$ が残りますが、この $2$ 人は仲が悪いため $2$ 度目の操作でペアにすることができません。 <br>
よって、 $1$ を出力します。

```input2
2 2
1 2
3 4
```

```output2
2
```

$1$ 度目の操作で生徒 $1$ と生徒 $2$ を選び、
 $2$ 度目の操作で生徒 $3$ と生徒 $4$ を選ぶのが
 $1$ 通り、
 $1$ 度目の操作で生徒 $3$ と生徒 $4$ を選び、
 $2$ 度目の操作で生徒 $1$ と生徒 $2$ を選ぶのが
 $1$ 通りであわせて $2$ 通りあります。
この $2$ つが区別されることに注意してください。

```input3
2 2
1 3
2 4
```

```output3
0
```

$1$ 度目の操作で選べるペアが無いため条件をみたす操作方法は無く、 $0$ を出力します。