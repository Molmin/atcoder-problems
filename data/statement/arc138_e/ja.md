配点 : $1000$ 点

## 問題文

整数 $N,K$ が与えられます．
以下の条件をすべて満たす整数列 $A=(A_1,A_2,\cdots,A_N)$ を，**よい**数列と呼ぶことにします．

- $0 \leq A_i \leq i$ ($1 \leq i \leq N$)
- 各整数 $v=1,2,\cdots,N$ について，$A_i=v$ となる $i$ は高々 $1$ つ．

すべてのよい数列 $A$ について以下の問題の答えを足し合わせた値を $10^9+7$ で割った余りを求めてください．

- $A$ の長さ $K$ の（連続するとは限らない）部分列であって，正整数のみからなり，かつ単調減少であるようなものは何通りあるか求めよ．
別の言い方をすれば，添字の列 $1 \leq i_1 &lt; i_2 &lt; \cdots &lt; i_K \leq N$ であって，
$A_{i_1} &gt; A_{i_2} &gt; \cdots &gt; A_{i_K} \geq 1$ を満たすものの個数を求めよ．

## 制約

- $3 \leq N \leq 5000$
- $2 \leq K$
- $2K-1 \leq N$
- 入力される値はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$ $K$

## 出力

答えを出力せよ．

```input1
3 2
```

```output1
1
```

例えば $A=(0,2,1)$ はよい数列であり，条件を満たす部分列の個数は $1$ です．
それ以外のよい数列の例としては $A=(0,1,0),(1,2,3),(0,0,0)$ などが考えられますが，どれも条件を満たす部分列が存在しません．
結局，$A=(0,2,1)$ 以外のよい数列は条件を満たす部分列を持たず，よって答えは $1$ になります．

```input2
6 2
```

```output2
660
```

```input3
10 3
```

```output3
242595
```

```input4
100 10
```

```output4
495811864
```