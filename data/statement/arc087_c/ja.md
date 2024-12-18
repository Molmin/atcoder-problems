配点 : $700$ 点

## 問題文

文字列 $s$, $t$ について、$s$ が $t$ の prefix でなく、$t$ が $s$ の prefix でないとき、$s$, $t$ は prefix-free であると言います。

$L$ を正の整数とします。
文字列集合 $S$ が **良い文字列集合** であるとは、次の条件が成り立つことです。

- $S$ の各文字列は、長さ $1$ 以上 $L$ 以下であり、文字 `0`, `1` のみからなる。
- $S$ の相異なる $2$ つの文字列のペアはいずれも prefix-free である。

良い文字列集合 $S = \{ s_1, s_2, ..., s_N \}$ があります。
Alice と Bob が次のゲームで勝負します。
二人は交互に次の操作を行います。
Alice が先手です。

- $S$ に新しい文字列をひとつ追加する。 ただし、追加後の $S$ は良い文字列集合のままでなければならない。

先に操作を行えなくなった方が負けです。
二人が最適に行動するとき、どちらが勝つか判定してください。

## 制約

- $1 \leq N \leq 10^5$
- $1 \leq L \leq 10^{18}$
- $s_1$, $s_2$, ..., $s_N$ はすべて相異なる。
- $\{ s_1, s_2, ..., s_N \}$ は良い文字列集合である。
- $|s_1| + |s_2| + ... + |s_N| \leq 10^5$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $L$
> 
> $s_1$
> 
> $s_2$
> 
> $:$
> 
> $s_N$

## 出力

Alice が勝つならば `Alice` を、Bob が勝つならば `Bob` を出力せよ。

```input1
2 2
00
01
```

```output1
Alice
```

Alice が `1` を追加すると、Bob は新たに文字列を追加できなくなります。

```input2
2 2
00
11
```

```output2
Bob
```

初手で Alice が追加できる文字列は `01`, `10` の $2$ 通りです。
初手で Alice が `01` を追加した場合は、Bob が `10` を追加すると、Alice は新たに文字列を追加できなくなります。
初手で Alice が `10` を追加した場合も、Bob が `01` を追加すると、Alice は新たに文字列を追加できなくなります。

```input3
3 3
0
10
110
```

```output3
Alice
```

Alice が `111` を追加すると、Bob は新たに文字列を追加できなくなります。

```input4
2 1
0
1
```

```output4
Bob
```

初手で Alice は新たに文字列を追加できません。

```input5
1 2
11
```

```output5
Alice
```

```input6
2 3
101
11
```

```output6
Bob
```