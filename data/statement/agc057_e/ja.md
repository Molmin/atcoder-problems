配点 : $1400$ 点

## 問題文

$H\times W$ 行列 $A = (A_{i,j})$ ($1\leq i\leq H, 1\leq j\leq W$) に対して、次の操作を考えます。

- **行ソート**：すべての行を昇順にソートする。つまり、すべての $i$ に対して $A_{i,1},\ldots,A_{i,W}$ を昇順にソートする。
- **列ソート**：すべての列を昇順にソートする。つまり、すべての $j$ に対して $A_{1,j},\ldots,A_{H,j}$ を昇順にソートする。

$H\times W$ 行列 $B = (B_{i,j})$ が与えられます。次の $2$ 条件をともに満たす $H\times W$ 行列 $A$ の総数を $998244353$ で割った余りを求めてください。

- $A$ に対して行ソート、列ソートをこの順に行った結果は $B$ に一致する。
- $A$ に対して列ソート、行ソートをこの順に行った結果は $B$ に一致する。

## 制約

- $1\leq H, W\leq 1500$
- $0\leq B_{i,j}\leq 9$
- 任意の $1\leq i\leq H$ および $1\leq j\leq W - 1$ に対して $B_{i,j}\leq B_{i,j+1}$
- 任意の $1\leq j\leq W$ および $1\leq i\leq H - 1$ に対して $B_{i,j}\leq B_{i+1,j}$
- 入力される値はすべて整数

## 入力

入力は以下の形式で標準入力から与えられます。

> $H$ $W$
> 
> $B_{1,1}$ $B_{1,2}$ $\ldots$ $B_{1,W}$
> 
> $\vdots$
> 
> $B_{H,1}$ $B_{H,2}$ $\ldots$ $B_{H,W}$

## 出力

条件を満たす行列 $A$ の総数を $998244353$ で割った余りを出力してください。

```input1
2 2
0 0
1 2
```

```output1
4
```

条件を満たす行列は次の $4$ つです：$\begin{pmatrix}0&amp;0\\1&amp;2\end{pmatrix}$, $\begin{pmatrix}0&amp;0\\2&amp;1\end{pmatrix}$, $\begin{pmatrix}1&amp;2\\0&amp;0\end{pmatrix}$, $\begin{pmatrix}2&amp;1\\0&amp;0\end{pmatrix}$. 

例えば、$\begin{pmatrix}2&amp;1\\0&amp;0\end{pmatrix}$ が条件を満たすことは次のように確かめられます。

- <p>行ソート、列ソートをこの順に行う場合：$\begin{pmatrix}2&amp;1\\0&amp;0\end{pmatrix}\to \begin{pmatrix}1&amp;2\\0&amp;0\end{pmatrix} \to \begin{pmatrix}0&amp;0\\1&amp;2\end{pmatrix}$.</p>
- <p>列ソート、行ソートをこの順に行う場合：$\begin{pmatrix}2&amp;1\\0&amp;0\end{pmatrix}\to \begin{pmatrix}0&amp;0\\2&amp;1\end{pmatrix} \to \begin{pmatrix}0&amp;0\\1&amp;2\end{pmatrix}$.</p>

```input2
3 3
0 1 3
2 4 7
5 6 8
```

```output2
576
```

例えば $\begin{pmatrix}5&amp;7&amp;6\\3&amp;0&amp;1\\4&amp;8&amp;2\end{pmatrix}$ が条件を満たします。このことは次のように確かめられます。

- <p>行ソート、列ソートをこの順に行う場合：$\begin{pmatrix}5&amp;7&amp;6\\3&amp;0&amp;1\\4&amp;8&amp;2\end{pmatrix}\to \begin{pmatrix}5&amp;6&amp;7\\0&amp;1&amp;3\\2&amp;4&amp;8\end{pmatrix} \to \begin{pmatrix}0&amp;1&amp;3\\2&amp;4&amp;7\\5&amp;6&amp;8\end{pmatrix}$.</p>
- <p>列ソート、行ソートをこの順に行う場合：$\begin{pmatrix}5&amp;7&amp;6\\3&amp;0&amp;1\\4&amp;8&amp;2\end{pmatrix}\to \begin{pmatrix}3&amp;0&amp;1\\4&amp;7&amp;2\\5&amp;8&amp;6\end{pmatrix} \to \begin{pmatrix}0&amp;1&amp;3\\2&amp;4&amp;7\\5&amp;6&amp;8\end{pmatrix}$.</p>

```input3
3 5
0 0 0 1 1
0 0 1 1 2
0 1 1 2 2
```

```output3
10440
```

```input4
1 7
2 3 3 6 8 8 9
```

```output4
1260
```