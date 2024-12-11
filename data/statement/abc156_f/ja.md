配点 : $600$ 点

## 問題文

長さ $k$ の数列 $d_0,d_1,...,d_{k - 1}$ があります。

以下のクエリ $q$ 個を順に処理してください。

- $i$ 番目のクエリは $3$ つの整数 $n_i,x_i,m_i$ からなる。
長さ $n_i$ の数列 $a_0,a_1,...,a_{n_i - 1}$ を、
\[ \begin{aligned} a_j =  \begin{cases}    x_i &amp; ( j = 0 ) \\    a_{j - 1} + d_{(j - 1)~\textrm{mod}~k} &amp; ( 0 &lt; j \leq n_i - 1 )  \end{cases}\end{aligned} \] と定める。
$(a_j \sim \textrm{mod} \sim m_i) &lt; (a_{j + 1} \sim \textrm{mod} \sim m_i)$ であるような、$j \sim (0 \leq j &lt; n_i - 1)$ の個数を出力する。

ここで $2$ つの整数 $y, z \sim (z &gt; 0)$ について、$(y \sim \textrm{mod} \sim z)$ は $y$ を $z$ で割った余りを表します。

## 制約

- 入力は全て整数である。
- $1 \leq k, q \leq 5000$
- $0 \leq d_i \leq 10^9$
- $2 \leq n_i \leq 10^9$
- $0 \leq x_i \leq 10^9$
- $2 \leq m_i \leq 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $k$ $q$
> 
> $d_0$ $d_1$ $...$ $d_{k - 1}$
> 
> $n_1$ $x_1$ $m_1$
> 
> $n_2$ $x_2$ $m_2$
> 
> $:$
> 
> $n_q$ $x_q$ $m_q$

## 出力

$q$ 行出力せよ。

$i$ 行目には、$i$ 番目のクエリに対する答えを出力せよ。

```input1
3 1
3 1 4
5 3 2
```

```output1
1
```

$1$ つ目のクエリについて、問題文で示した数列 {$a_j$} は $3,6,7,11,14$ になります。

- $(a_0 \sim \textrm{mod} \sim 2) &gt; (a_1 \sim \textrm{mod} \sim 2)$
- $(a_1 \sim \textrm{mod} \sim 2) &lt; (a_2 \sim \textrm{mod} \sim 2)$
- $(a_2 \sim \textrm{mod} \sim 2) = (a_3 \sim \textrm{mod} \sim 2)$
- $(a_3 \sim \textrm{mod} \sim 2) &gt; (a_4 \sim \textrm{mod} \sim 2)$

であるため、このクエリに対する答えは $1$ です。

```input2
7 3
27 18 28 18 28 46 1000000000
1000000000 1 7
1000000000 2 10
1000000000 3 12
```

```output2
224489796
214285714
559523809
```