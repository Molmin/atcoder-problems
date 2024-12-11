Score : $1400$ points

## Problem Statement

Consider the following operations on an $H\times W$ matrix $A = (A_{i,j})$ ($1\leq i\leq H, 1\leq j\leq W$).

- **Row-sort**: Sort every row in ascending order. That is, sort $A_{i,1},\ldots,A_{i,W}$ in ascending order for every $i$.
- **Column-sort**: Sort every column in ascending order. That is, sort $A_{1,j},\ldots,A_{H,j}$ in ascending order for every $j$.

You are given an $H\times W$ matrix $B = (B_{i,j})$. Find the number of $H\times W$ matrices $A$ that satisfy both of the following conditions, modulo $998244353$.

- Performing row-sort and then column-sort on $A$ produces $B$.
- Performing column-sort and then row-sort on $A$ produces $B$.

## Constraints

- $1\leq H, W\leq 1500$
- $0\leq B_{i,j}\leq 9$
- $B_{i,j}\leq B_{i,j+1}$, for any $1\leq i\leq H$ and $1\leq j\leq W - 1$.
- $B_{i,j}\leq B_{i+1,j}$, for any $1\leq j\leq W$ and $1\leq i\leq H - 1$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $B_{1,1}$ $B_{1,2}$ $\ldots$ $B_{1,W}$
> 
> $\vdots$
> 
> $B_{H,1}$ $B_{H,2}$ $\ldots$ $B_{H,W}$

## Output

Print the number of matrices $A$ that satisfy the conditions, modulo $998244353$.

```input1
2 2
0 0
1 2
```

```output1
4
```

The four matrices that satisfy the conditions are:

$\begin{pmatrix}0&amp;0\\1&amp;2\end{pmatrix}$, $\begin{pmatrix}0&amp;0\\2&amp;1\end{pmatrix}$, $\begin{pmatrix}1&amp;2\\0&amp;0\end{pmatrix}$, $\begin{pmatrix}2&amp;1\\0&amp;0\end{pmatrix}$. 

We can verify that $\begin{pmatrix}2&amp;1\\0&amp;0\end{pmatrix}$, for example, satisfies the conditions as follows.

- <p>Performing row-sort and then column-sort: $\begin{pmatrix}2&amp;1\\0&amp;0\end{pmatrix}\to \begin{pmatrix}1&amp;2\\0&amp;0\end{pmatrix} \to \begin{pmatrix}0&amp;0\\1&amp;2\end{pmatrix}$.</p>
- <p>Performing column-sort and then row-sort:$\begin{pmatrix}2&amp;1\\0&amp;0\end{pmatrix}\to \begin{pmatrix}0&amp;0\\2&amp;1\end{pmatrix} \to \begin{pmatrix}0&amp;0\\1&amp;2\end{pmatrix}$.</p>

```input2
3 3
0 1 3
2 4 7
5 6 8
```

```output2
576
```

$\begin{pmatrix}5&amp;7&amp;6\\3&amp;0&amp;1\\4&amp;8&amp;2\end{pmatrix}$, for example, satisfies the conditions, which can be verified as follows.

- <p>Performing row-sort and then column-sort: $\begin{pmatrix}5&amp;7&amp;6\\3&amp;0&amp;1\\4&amp;8&amp;2\end{pmatrix}\to \begin{pmatrix}5&amp;6&amp;7\\0&amp;1&amp;3\\2&amp;4&amp;8\end{pmatrix} \to \begin{pmatrix}0&amp;1&amp;3\\2&amp;4&amp;7\\5&amp;6&amp;8\end{pmatrix}$.</p>
- <p>Performing column-sort and then row-sort: $\begin{pmatrix}5&amp;7&amp;6\\3&amp;0&amp;1\\4&amp;8&amp;2\end{pmatrix}\to \begin{pmatrix}3&amp;0&amp;1\\4&amp;7&amp;2\\5&amp;8&amp;6\end{pmatrix} \to \begin{pmatrix}0&amp;1&amp;3\\2&amp;4&amp;7\\5&amp;6&amp;8\end{pmatrix}$.</p>

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