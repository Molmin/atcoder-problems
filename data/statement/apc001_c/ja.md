配点 : $500$ 点

## 問題文

<font color="red">**これはインタラクティブな問題です。**</font>

$N$ を $3$ 以上の奇数とします。

$N$ 個の席が円状に並んでいます。
席には $0$ から $N - 1$ まで番号が振られています。
各 $i$ ($0 \leq i \leq N - 2$) について、席 $i$ と席 $i + 1$ は隣り合っています。
また、席 $N - 1$ と席 $0$ は隣り合っています。

各席の状態は「空席」「男性が座っている」「女性が座っている」のどれかです。
ただし、同性どうしが隣り合う席に座っていることはありません。
$N$ が $3$ 以上の奇数の場合、空席が少なくとも $1$ つは存在することが示せます。

あなたには $N$ のみが与えられ、各席の状態は与えられません。
あなたの目標は、どれか $1$ つの空席の番号を当てることです。
そのために、あなたは次のクエリを繰り返し送ることができます。

- 整数 $i$ ($0 \leq i \leq N - 1$) を選ぶ。 席 $i$ が空席ならば、正答となる。 そうでなければ、席 $i$ に座っている人の性別が知らされる。

クエリを高々 $20$ 回まで送ることで、どれか $1$ つの空席の番号を当ててください。

## 制約

- $N$ は奇数である。
- $3 \leq N \leq 99,999$

## 入出力

最初に、$N$ が次の形式で標準入力から与えられる。

```plain
$N$
```

次に、クエリを繰り返し送る。
クエリは次の形式で標準出力へ出力する。
行末には改行を出力せよ。

```plain
$i$
```

これに対するクエリの答えは、次の形式で標準入力から与えられる。

```plain
$s$
```

$s$ は `Vacant`, `Male`, `Female` のどれかである。
これらはそれぞれ、席 $i$ の状態が「空席」「男性が座っている」「女性が座っている」であることを表す。

## 注意

- 出力の度に標準出力を flush せよ。 そうしない場合、`TLE` の可能性がある。
- $s$ が `Vacant` の場合、すぐにプログラムを終了せよ。 そうしない場合、ジャッジ結果は不定である。
- クエリ回数が $20$ を超えた場合、およびクエリの形式が正しくない場合、ジャッジ結果は不定である。

## 入出力例 1

このサンプルでは、$N = 3$ であり、席 $0$, $1$, $2$ の状態はそれぞれ「男性が座っている」「女性が座っている」「空席」である。

InputOutput

3
0
Male
1
Female
2
Vacant