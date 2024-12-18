配点 : $525$ 点

## 問題文

高橋君と青木君は、これから $N$ 日間アルバイトをします。<br>
高橋君のシフト表は文字列 $S$ により与えられ、$S$ の $i$ 文字目が `#` のとき $i$ 日目に出勤、`.` のとき $i$ 日目に欠勤します。<br>
これをもとに、青木君は以下のようにシフト表を作りました。  

- まず、$N$ でない $N$ の正の約数 $M$ をとる。
- 次に、$1$ 日目から $M$ 日目までの勤怠を決める。
- 最後に、$i = 1, 2, \ldots, N - M$ の順に $M + i$ 日目の勤怠が $i$ 日目の勤怠と一致するように $M + i$ 日目の勤怠を決める。

ここで、$M$ の値が異なる場合でも最終的にできたシフトが同じものとなることがあることに注意してください。

$N$ 日すべてについて高橋君と青木君の少なくとも一方が出勤することになったとき、青木君のシフト表として考えられるものの個数を $998244353$ で割った余りを求めてください。

## 制約

- $N$ は $2$ 以上 $10^5$ 以下の整数
- $S$ は 長さ $N$ の `#`、`.` からなる文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S$

## 出力

答えを出力せよ。

```input1
6
##.#.#
```

```output1
3
```

高橋君は $1 \cdot 2 \cdot 4 \cdot 6$ 日目に出勤します。<br>
青木君のシフト表を表す文字列を $T$ とし、青木君は $T$ の $i$ 文字目が `#` のとき $i$ 日目に出勤、`.` のとき $i$ 日目に欠勤するとします。<br>
$T$ としてあり得るものは `######` $\cdot$ `#.#.#.` $\cdot$ `.##.##` の $3$ つです。  

$1$ つめのシフト表は $M$ を $1$ または $2$ または $3$、$2$ つめのシフト表は $M = 2$、$3$ つめのシフト表は $M = 3$ とすることにより実現できます。

```input2
7
...####
```

```output2
1
```

```input3
12
####.####.##
```

```output3
19
```