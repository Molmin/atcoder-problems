配点 : $400$ 点

## 問題文

すぬけ君は一つの整数が書かれたボールを $N$ 個持っています。
ボールに書かれている数はそれぞれ $a_1, a_2, \ldots, a_N$ です。

すぬけ君はこの $N$ 個のボールを $K$ 個の箱に割り振って入れることにしました。どのボールも箱に入れる必要はありますが、ボールが入っていない箱やボールが複数入っている箱があっても構いません。

すぬけ君がボールを入れ終わるとそれぞれの箱の蓋に整数が表示されます。
表示される整数を $x$ とすると、$x$ は箱の中に $x$ が書かれたボールが存在しないような最小の **非負** 整数です。
例えば、空の箱の蓋には $0$ が、中に $0,1,3,5$ と書かれたボールが入っている箱の蓋には $2$ が、中に $1,2,3$ と書かれたボールが入っている箱の蓋には $0$ が表示されます。

箱の蓋に表示される整数の総和としてありうる値の最大値を求めてください。

## 制約

- 与えられる入力は全て整数
- $1 \leq K \leq N \leq 3 \times 10^{5}$
- $0 \leq a_i &lt; N$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $a_1$ $a_2$ $\cdots$ $a_N$

## 出力

箱の蓋に表示される整数の総和としてありうる値の最大値を出力せよ。

```input1
4 2
0 1 0 2
```

```output1
4
```

- 箱に入っているボールに書かれた数の集合が $\{0,1,2 \},\{0\}$ となるように割り振って入れるのが最適です。
- 箱の蓋には $3,1$ がそれぞれ表示され、これらの総和は $4$ となります。

```input2
5 2
0 1 1 2 3
```

```output2
4
```

- 箱に入っているボールに書かれた数の(多重)集合が $\{0,1,1,2,3\}, \{\}$ となるように割り振って入れるのが最適です。
- 箱の蓋には $4,0$ がそれぞれ表示され、これらの総和は $4$ となります。
- ボールの入っていない箱があっても構わないことに注意してください。

```input3
20 4
6 2 6 8 4 5 5 8 4 1 7 8 0 3 6 1 1 8 3 0
```

```output3
11
```