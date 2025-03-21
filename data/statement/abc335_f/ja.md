配点 : $525$ 点

## 問題文

一列に並んだ $N$ 個のマス $1,2,\dots,N$ と長さ $N$ の数列 $A=(A_1,A_2,\dots,A_N)$ があります。<br>
最初、マス $1$ は黒く、他の $N-1$ 個のマスは白く塗られており、 $1$ つのコマがマス $1$ に置かれています。  

以下の操作を $0$ 回以上好きな回数繰り返します。

- コマがマス $i$ にあるとき、ある正整数 $x$ を決めてコマをマス $i + A_i \times x$ に移動させる。-   - 但し、 $i + A_i \times x &amp;gt; N$ となるような移動はできません。
- その後、マス $i + A_i \times x$ を黒く塗る。

操作を終えた時点で黒く塗られたマスの集合として考えられるものの数を $998244353$ で割った余りを求めてください。

## 制約

- 入力は全て整数
- $1 \le N \le 2 \times 10^5$
- $1 \le A_i \le 2 \times 10^5$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## 出力

答えを整数として出力せよ。

```input1
5
1 2 3 1 1
```

```output1
8
```

黒く塗られたマスの集合として考えられるものは以下の $8$ 通りです。

- マス $1$
- マス $1,2$
- マス $1,2,4$
- マス $1,2,4,5$
- マス $1,3$
- マス $1,4$
- マス $1,4,5$
- マス $1,5$

```input2
1
200000
```

```output2
1
```

```input3
40
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
```

```output3
721419738
```

$998244353$ で割った余りを求めることに注意してください。