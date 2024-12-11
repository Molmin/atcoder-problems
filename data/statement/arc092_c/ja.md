配点 : $700$ 点

## 問題文

あなたは，長さ $N$ の数列 $a_1, a_2, ..., a_N$ を持っています。

あなたは，この数列の長さが $1$ になるまで，繰り返し以下の操作を行います。

- まず，数列の要素を $1$ つ選ぶ。
- もしその要素が数列の端だった場合，その要素を削除する。
- もしその要素が数列の端でない場合，その要素を，選んだ要素の両隣の要素の和に書き換える。そしてその後，両隣の要素を削除する。

あなたは，最終的な数列の要素の値を最大化したいです。

最終的な数列の要素の値の最大値と，それを達成する手順を求めてください。

## 制約

- 入力は全て整数
- $2 \leq N \leq 1000$
- $|a_i| \leq 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## 出力

- $1$ 行目には，最終的な数列の要素の値の最大値を出力せよ。
- $2$ 行目には，操作の回数を出力せよ。
- $2+i$ 行目には，$i$ 回目の操作で選ぶ要素が，その時点の数列で左から何番目かを出力せよ。
- 最大値を達成する手順が複数存在する場合，そのうちどれを出力しても良い。

```input1
5
1 4 3 7 5
```

```output1
11
3
1
4
2
```

数列は以下のように変化します。

- $1$ 回目の操作後の数列 : $4, 3, 7, 5$
- $2$ 回目の操作後の数列 : $4, 3, 7$
- $3$ 回目の操作後の数列 : $11(4+7)$

```input2
4
100 100 -1 100
```

```output2
200
2
3
1
```

- $1$ 回目の操作後の数列 : $100, 200(100+100)$
- $2$ 回目の操作後の数列 : $200$

```input3
6
-1 -2 -3 1 2 3
```

```output3
4
3
2
1
2
```

- $1$ 回目の操作後の数列 : $-4, 1, 2, 3$
- $2$ 回目の操作後の数列 : $1, 2, 3$
- $3$ 回目の操作後の数列 : $4$

```input4
9
1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000
```

```output4
5000000000
4
2
2
2
2
```