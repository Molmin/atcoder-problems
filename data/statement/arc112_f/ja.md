配点 : $900$ 点

## 問題文

すぬけくんはカード $1$ からカード $n$ の $n$ 種類のカードを使うゲームで遊んでいます。
このゲームには、カードパックが $m$ 種類存在し、$i$ 種類目のカードパックにはカード $j$ が $s_{i,j}$ 枚含まれています。
どのカードパックにもカードが $1$ 枚以上含まれています。

最初、すぬけくんはカード $j$ を $c_j$ 枚持っています（合計で $1$ 枚以上のカードを持っていることが保証されます）。

すぬけくんは、次の操作を好きな順番で好きな回数行うことができます。

- カードパックをもらう：$i=1,\dots,m$ のうちひとつを選ぶ。$i$ 種類目のパックに含まれるカードをすべて手に入れる。
- カードを交換する：$j=1,\dots,n$ のうちひとつを選ぶ。カード $j$ を $2j$ 枚捨てて、カード $((j \text{ mod } n) + 1)$ を $1$ 枚手に入れる。（カード $j$ を $2j$ 枚以上持っていなければならない。）

すぬけくんは持っているカードの総数をできるだけ少なくしたいです。すぬけくんが達成できるカードの総数の最小値を求めてください。

## 制約

- $2 \le n \le 16$
- $1 \le m \le 50$
- $0 \le s_{i,j}, c_j \lt 2j$
- $c_1+\dots +c_n &gt; 0$
- $s_{i,1}+\dots +s_{i,n} &gt; 0$

## 入力

入力は以下の形式で標準入力から与えられる。

> $n$ $m$
> 
> $c_1$ $\dots$ $c_n$
> 
> $s_{1,1}$ $\dots$ $s_{1,n}$
> 
> $\vdots$
> 
> $s_{m,1}$ $\dots$ $s_{m,n}$

## 出力

すぬけくんが達成できるカードの総数の最小値を出力せよ。

```input1
3 1
0 3 5
0 1 0
```

```output1
1
```

カード $1$ を $a_1$ 枚、カード $2$ を $a_2$ 枚、カード $3$ を $a_3$ 枚持っていることを $(a_1, a_2, a_3)$ と書くことにします。
以下のように操作をすると、カードの総数を $1$ 枚にすることができます。

- $1$ 種類目のカードパックをもらう。$(0,4,5)$ となる。
- $j=2$ を選んでカードを交換する。$(0,0,6)$ となる。
- $j=3$ を選んでカードを交換する。$(1,0,0)$ となる。

カードの総数を $0$ 枚にすることはできないため、これが最小です。

```input2
5 2
0 0 1 7 0
0 3 2 0 0
1 0 4 0 0
```

```output2
2
```

$2$ 種類目のカードパックを $2$ パックもらったあと、$1$ 種類目のカードパックをもらい、その後何度かカードを交換すると、
カード $4$ とカード $5$ を $1$ 枚ずつ持っている状態が作れます。

```input3
12 10
0 2 4 4 1 5 6 8 0 9 18 19
1 2 4 3 4 0 6 10 9 18 5 7
0 3 0 1 1 4 11 13 9 19 9 10
1 2 4 1 5 8 1 6 15 0 11 1
0 2 0 6 9 3 13 14 16 9 14 14
1 3 2 5 6 1 9 7 1 7 6 22
0 0 4 5 2 3 8 3 13 14 17 4
0 3 3 4 0 7 0 9 14 2 17 14
0 2 4 1 3 3 3 14 17 6 15 13
0 0 1 0 1 0 4 5 9 4 17 17
1 2 1 3 5 7 0 13 7 6 1 0
```

```output3
9
```