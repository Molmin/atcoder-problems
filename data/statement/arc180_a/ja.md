配点 : $400$ 点

## 問題文

`A`, `B` からなる長さ $N$ の文字列 $S$ が与えられます．

あなたは以下の $2$ 種類の操作を好きな順序で $0$ 回以上繰り返すことができます．

- $S$ の中で `ABA` となっている (連続した) 部分を選び，それを `A` で置き換える．
- $S$ の中で `BAB` となっている (連続した) 部分を選び，それを `B` で置き換える．

操作後の $S$ としてあり得る文字列の個数を $10^9+7$ で割ったあまりを求めてください．

## 制約

- $1 \leq N \leq 250000$
- $S$ は `A`, `B` からなる長さ $N$ の文字列

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$
> 
> $S$

## 出力

答えを出力せよ．

```input1
4
ABAB
```

```output1
2
```

操作後の $S$ としてあり得るのは以下の $2$ 種類の文字列です．

- `ABAB`: $0$ 回の操作を行うことでこの文字列を得ることができます．
- `AB`: $S=$`ABAB` の $1$ 文字目から $3$ 文字目までが `ABA` となっています．これを `A` で置き換えると $S=$`AB` となります．

なお，$S=$`ABAB` の $2$ 文字目から $4$ 文字目までが `BAB` となっているので，これを `B` に置き換える操作も可能です．
ただし，その結果得られる `AB` は重複して数えないことに注意してください．

```input2
1
A
```

```output2
1
```

操作を $1$ 度も行うことができません．

```input3
17
BBABABAABABAAAABA
```

```output3
18
```

```input4
100
ABAABAABABBABAABAABAABABBABBABBABBABBABBABBABBABBABBABBABBABBABBABAABABAABABBABBABABBABAABAABAABAABA
```

```output4
415919090
```

$10^9+7$ で割ったあまりを求めるのを忘れないようにしてください．