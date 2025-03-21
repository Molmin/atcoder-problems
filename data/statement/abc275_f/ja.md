配点 : $500$ 点

## 問題文

正整数列 $A=(a_1,a_2,\ldots,a_N)$ が与えられます。<br>
あなたは次の操作を $0$ 回以上何度でも繰り返せます。

- $A$ から（空でない）連続する部分列を選び、削除する。

$x=1,2,\ldots,M$ に対し、次の問題を解いてください。

- $A$ の要素の総和をちょうど $x$ にするために必要な操作回数の最小値を求めてください。ただし、どのように操作を行っても $A$ の要素の総和をちょうど $x$ にできない場合は代わりに `-1` と出力してください。

なお、$A$ が空である時、$A$ の要素の総和は $0$ であるとします。

## 制約

- $1 \leq N,M \leq 3000$
- $1 \leq a_i \leq 3000$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $a_1$ $\ldots$ $a_N$

## 出力

$M$ 行出力せよ。$i$ 行目には $x=i$ に対する答えを出力せよ。

```input1
4 5
1 2 3 4
```

```output1
1
2
1
1
1
```

操作回数が最小である操作の例を以下に示します。

- $x=1$ について、$a_2,a_3,a_4$ に対して操作をすることで $A$ の要素の総和が $x$ になります。
- $x=2$ について、$a_3,a_4$ に対して操作をした後、$a_1$ に対して操作をすることで $A$ の要素の総和が $x$ になります。
- $x=3$ について、$a_3,a_4$ に対して操作をすることで $A$ の要素の総和が $x$ になります。
- $x=4$ について、$a_1,a_2,a_3$ に対して操作をすることで $A$ の要素の総和が $x$ になります。
- $x=5$ について、$a_2,a_3$ に対して操作をすることで $A$ の要素の総和が $x$ になります。

```input2
1 5
3
```

```output2
-1
-1
0
-1
-1
```

```input3
12 20
2 5 6 5 2 1 7 9 7 2 5 5
```

```output3
2
1
2
2
1
2
1
2
2
1
2
1
1
1
2
2
1
1
1
1
```