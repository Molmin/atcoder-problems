配点 : $1000$ 点

## 問題文

りんごさんは文字列 $S$ を持っています。

りんごさんは以下のような $N$ 種類の操作を好きな順番で何回でも行うことができます。

- 操作 $i$：$S$ の $L_i$ 文字目から $R_i$ 文字目までをそれぞれ次のアルファベットにする。（`a` は `b` に、`b` は `c` に・・・）ただし、`z` の次のアルファベットは `a` であるとする。

回文が大好きなりんごさんは $S$ を回文にしようとしています。
これが可能かどうかを判定してください。

## 制約

- $1 \leq |S| \leq 10^5$
- $S$ は小文字アルファベットのみからなる。
- $1 \leq N \leq 10^5$
- $1 \leq L_i \leq R_i \leq |S|$

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$
> 
> $N$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $:$
> 
> $L_N$ $R_N$

## 出力

$S$ を回文にできるなら `YES` を、できないなら `NO` を出力せよ。

```input1
bixzja
2
2 3
3 6
```

```output1
YES
```

例えば、操作 $1$、操作 $2$、操作 $1$ の順に行うと、`bixzja` → `bjyzja` → `bjzakb` → `bkaakb` と変化し、回文になります。

```input2
abc
1
2 2
```

```output2
NO
```

```input3
cassert
4
1 2
3 4
1 1
2 2
```

```output3
YES
```