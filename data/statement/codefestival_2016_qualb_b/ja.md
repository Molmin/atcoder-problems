配点 : $200$ 点

## 問題文

CODE FESTIVAL 2016の予選には$N$人が参加しました。参加者は、国内の学生であるか、海外の学生であるか、どちらでもないかのどれかです。

予選は国内または海外の学生のみが通過することができ、上位の学生から順に、以下の条件を満たすときに通過します。学生でない参加者は予選を通過できません。

- 国内の学生は、現在予選の通過が確定した参加者が$A+B$人に満たなければ、予選を通過する
- 海外の学生は、現在予選の通過が確定した参加者が$A+B$人に満たず、さらに海外の学生の中での順位が$B$位以内なら、予選を通過する

参加者の情報を表す文字列$S$が与えられます。
$S$の$i$文字目が`a`のとき予選で$i$位の参加者が国内の学生であることを、
$S$の$i$文字目が`b`のとき予選で$i$位の参加者が海外の学生であることを、
$S$の$i$文字目が`c`のとき予選で$i$位の参加者がそのどちらでもないことを表しています。

すべての参加者について、上位から順に、予選を通過した場合は`Yes`、そうでない場合は`No`を出力するプログラムを作成してください。

## 制約

- $1 \leq N,A,B \leq 100000$
- $A+B \leq N$
- $S$ の長さは$N$である。
- $S$ は文字`a`と`b`と`c`のみからなる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $A$ $B$
> 
> $S$

## 出力

$N$ 行出力せよ。$i$行目には、$i$位の参加者が予選を通過した場合`Yes`、そうでない場合`No`を出力せよ。

```input1
10 2 3
abccabaabb
```

```output1
Yes
Yes
No
No
Yes
Yes
Yes
No
No
No
```

$1,2,5,6,7$位の参加者が予選を通過します。

```input2
12 5 2
cabbabaacaba
```

```output2
No
Yes
Yes
Yes
Yes
No
Yes
Yes
No
Yes
No
No
```

$6$位の参加者は海外の学生の中で$3$位なので、予選を通過しません。

```input3
5 2 2
ccccc
```

```output3
No
No
No
No
No
```