配点 : $800$ 点

## 問題文

<font color="red">**これはインタラクティブな問題です。**</font>

すぬけくんはお気に入りの正の整数 $N$ を持っています。あなたは 「$n$ はお気に入りの正の整数か？」と最大 $64$ 回すぬけくんに質問することができます。 $N$ を特定してください。

すぬけくんはひねくれ者なので「$n$ はお気に入りの正の整数か？」と質問されたとき、$n$ が以下の $2$ つの条件のどちらかを満たすとき  Yes と、それ以外のとき No と答えます。

- $n \leq N$ かつ $str(n) \leq str(N)$を満たす
- $n &gt; N$ かつ $str(n) &gt; str(N)$ を満たす

ここで、$str(x)$ は正の整数 $x$ を十進表記(先頭に $0$ をつけない)の文字列として表したものです。例えば $str(123) =$ `123`，$str(2000)$ = `2000` です。
なお、この問題において文字列同士は辞書順で比較されます。例えば `11111` $&lt;$ `123`，`123456789` $&lt;$ `9` が成立します。

## 制約

- $1 \leq N \leq 10^{9}$

## 入出力

各質問は、標準出力に以下の形式で出力せよ：

```plain
? $n$
```

ここで $n$ は $1$ 以上 $10^{18}$ 以下の整数でなければならない。

次に、質問の答えが標準入力から以下の形式で与えられる：

```plain
$ans$
```

ここで $ans$ は `Y` または `N` である．`Y` ならば、質問の答えが Yes であることを、`N` ならば No であることを示す。

最後に、答えを以下の形式で出力せよ：

```plain
! $n$
```

ここで $n=N$ でなくてはならない。

## ジャッジ

- <font color="red">**出力のあと、標準出力を flush せよ。**</font>従わない場合 `TLE` の可能性がある。
- 答えを出力した後、プログラムをすぐに終了せよ。従わない場合のジャッジの挙動は定義されていない。
- 出力の答えが間違っている場合の挙動は定義されていない(`WA` とは限らない)。

## 入出力例

これは $N=123$ のときの入出力例です。

Input
Output

`? 1`

`Y`

`? 32`

`N`

`? 1010`

`N`

`? 999`

`Y`

`! 123`

- $1 \leq 123$ かつ $str(1) \leq str(123)$ なので答えは Yes です
- $32 \leq 123$ ですが、$str(32) &gt; str(123)$ なので答えは No です
- $1010 &gt; 123$ ですが、$str(1010) \leq str(123)$ なので答えは No です
- $999 \geq 123$ かつ $str(999) &gt; str(123)$ なので答えは Yes です
- $N$ は $123$ であると $4$ 回の質問で回答できたため正解となります