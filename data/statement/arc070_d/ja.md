配点 : $1300$ 点

## 問題文

<font color="red">**これはインタラクティブな問題です。**</font>

シカのAtCoDeerくんは $0$~$N-1$ の番号がついた $N$ 人の人が集まっているのを見つけました。
この内 $A$ 人は*正直者*で、残りの $B(=N-A)$ 人は*不親切な人*です。
$N$ 人の人は全員、誰が*正直者*で、誰が*不親切な人*かを把握しています。
一方、AtCoDeerくんは、*正直者*が $A$ 人いて*不親切な人*が $B$ 人いることしか知りません。
そこで、AtCoDeerくんはこれらの $N$ 人に質問をして、*正直者*を全員特定しようとしています。
一回の質問では、AtCoDeerくんは、$0 \leq a,b \leq N-1$ なる $a$, $b$ を選んで、$a$ さんに「$b$ さんは*正直者*ですか?」という質問をします。

*正直者*は、質問に対し常に Yes か No の正しい答えを返します。
一方、*不親切な人*は、質問に対し Yes か No のどちらかを**恣意的に**選んで返します。
つまり、常に嘘をついたり、半分の確率でランダムに答えるといった単純なアルゴリズムではない可能性があります。

AtCoDeerくんは高々 $2N$ 回質問をすることができます。質問は順番に行われ、以前の質問の結果から次の質問を決めることが出来ます。

*正直者*を全員特定してください。
不可能な場合(正確には、どのような $2N$ 回の質問をしようと、*不親切な人*たちがうまく返答することで、*正直者*の集合としてありうるものが2つ以上存在するようにできる場合)は、その旨を出力してください。

## 制約

- $1 \leq A,B \leq 2000$

## 入出力

最初に、標準入力から $A$ と $B$ が以下の形式で与えられる:

```plain
$A$ $B$
```

もし特定が不可能な場合は、即座に次のように出力し、プログラムを終了しなければならない。:

```plain
Impossible
```

それ以外の場合は、次に、クエリを質問する。
各クエリは、標準出力に以下の形式で出力されなければならない:

```plain
? $a$ $b$
```

ここで $a$ と $b$ は $0$ 以上 $N-1$ 以下の整数でなければならない。

次に、クエリの答えが標準入力から以下の形式で与えられる:

```plain
$ans$
```

ここで $ans$ は `Y` または `N` である。
`Y` のときは質問の答えが Yes であることを、`N` のときは No であることを表す。

最後に、答えを以下の形式で出力しなければならない：

```plain
! $s_0s_1...s_{N-1}$
```

ここで $s_i$ は $i$ 番の人が*正直者*なら `1`、*不親切な人*なら `0` でなければならない。

## ジャッジ

- <font color="red">**出力のあと、標準出力を flush しなければならない。**</font> そうでないときは `TLE` の可能性がある。
- 答えを出力した後、プログラムをすぐに終了しなければならない。そうでないときの挙動は定義されていない。
- 出力の答えが間違っている場合の挙動は定義されていない (`WA`とは限らない)。

## サンプル

このサンプルでは $A = 2$, $B = 1$ で、答えは `101` である。

Input
Output

$2$ $1$

$?$ $0$ $1$

$N$

$?$ $0$ $2$

$Y$

$?$ $1$ $0$

$Y$

$?$ $2$ $0$

$Y$

$?$ $2$ $2$

$Y$

$!$ $101$

次のサンプルでは $A = 1$, $B = 2$ で、答えは `Impossible` である。

Input
Output

$1$ $2$

$Impossible$