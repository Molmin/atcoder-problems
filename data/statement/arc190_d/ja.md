配点 : $900$ 点

## 問題文

素数 $p$ と $N\times N$ 行列 $A = (A_{i,j})$ ($1\leq i,j\leq N$) が与えられます．$A$ の成分は $0$ 以上 $p-1$ 以下の整数です．

$A$ の成分のうち，$0$ を全て $1$ 以上 $p-1$ 以下の整数に置き換えて得られる行列 $B$ は，$A$ に含まれる $0$ の個数を $K$ とすると $(p-1)^K$ 個あります．

考えられる $B$ 全てに対する $B^p$ の総和の各成分を $p$ で割った余りを求めてください．

## 制約

- $1\leq N\leq 100$
- $p$ は $1\leq p\leq 10^9$ を満たす素数
- $0\leq A_{i,j}\leq p-1$
- 入力される値はすべて整数である

## 入力

入力は以下の形式で標準入力から与えられます．

> $N$ $p$
> 
> $A_{1,1}$ $\cdots$ $A_{1,N}$
> 
> $\vdots$
> 
> $A_{N,1}$ $\cdots$ $A_{N,N}$

## 出力

$N$ 行出力してください．

$i$ 行目には $j=1,\ldots,N$ の順に，考えられる $B$ 全てに対する $B^p$ の総和の $(i,j)$ 成分を $p$ で割った余りを空白区切りで出力してください．

```input1
2 3
0 1
0 2
```

```output1
0 2
1 2
```

考えられる $B$ 全てに対する $B^p$ は次の通りです．

- $\begin{pmatrix}1&amp;1 \\ 1&amp;2\end{pmatrix}^3=\begin{pmatrix}5&amp;8 \\ 8&amp;13\end{pmatrix}$
- $\begin{pmatrix}1&amp;1 \\ 2&amp;2\end{pmatrix}^3=\begin{pmatrix}9&amp;9 \\ 18&amp;18\end{pmatrix}$
- $\begin{pmatrix}2&amp;1 \\ 1&amp;2\end{pmatrix}^3=\begin{pmatrix}14&amp;13 \\ 13&amp;14\end{pmatrix}$
- $\begin{pmatrix}2&amp;1 \\ 2&amp;2\end{pmatrix}^3=\begin{pmatrix}20&amp;14 \\ 28&amp;20\end{pmatrix}$

これらの総和 $\begin{pmatrix}48&amp;44 \\ 67&amp;65\end{pmatrix}$ の各成分を $p=3$ で割った余りを出力します．

```input2
3 2
1 0 0
0 1 0
0 0 1
```

```output2
1 1 1
1 1 1
1 1 1
```

考えられる $B$ 全てに対する $B^p$ は次の通りです．

- $\begin{pmatrix}1&amp;1&amp;1 \\ 1&amp;1&amp;1 \\ 1&amp;1&amp;1\end{pmatrix}^2=\begin{pmatrix}3&amp;3&amp;3\\3&amp;3&amp;3\\3&amp;3&amp;3\end{pmatrix}$

これらの総和 $\begin{pmatrix}3&amp;3&amp;3\\3&amp;3&amp;3\\3&amp;3&amp;3\end{pmatrix}$ の各成分を $p=2$ で割った余りを出力します．

```input3
4 13
0 1 2 0
3 4 0 5
0 6 0 7
8 9 0 0
```

```output3
8 0 6 5
11 1 8 5
8 0 4 12
8 0 1 9
```