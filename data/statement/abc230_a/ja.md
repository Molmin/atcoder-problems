配点 : $100$ 点

## 問題文

AtCoder で定期的に開催されている、国際的な権威があるコンテストである AtCoder Grand Contest (以下、AGC) は今までに $54$ 回開催されてきました。

みなさんがちょうど参加している $230$ 回目の ABC である `ABC230` と同様に、 当初は $N$ 回目の AGC のコンテスト名には $N$ を $3$ 桁になるようにゼロ埋めした数が割り振られていました。( $1$ 回目の AGC は `AGC001`, $2$ 回目の AGC は `AGC002`, ...)

ところが、最新の $54$ 回目の AGC のコンテスト名は `AGC055` で、回数より $1$ 大きい数が割り振られています。これは、`AGC042` が社会情勢の影響で中止されて欠番となったため、$42$ 回目以降に開催されたコンテストでは開催された回数より $1$ 大きい数が割り振られているからです。(入出力例にある説明も参考にしてください。)

さて、ここで問題です。整数 $N$ が与えられるので、$N$ 回目に開催された AGC のコンテスト名を `AGCXXX` の形式で出力してください。ここで、`XXX` にはゼロ埋めがなされた $3$ 桁の数が入ります。

## 制約

- $1 \leq N \leq 54$
- $N$ は整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$

## 出力

$N$ 回目に開催された AGC のコンテスト名を所定の形式で出力せよ。

```input1
42
```

```output1
AGC043
```

問題文にある通り、 $42$ 回目以降の AGC には回数より $1$ 大きい数が割り振られています。<br>
よって $42$ 回目の AGC のコンテスト名は `AGC043` になります。

```input2
19
```

```output2
AGC019
```

$41$ 回目以前の AGC は回数と同じ数が割り振られています。<br>
よって `AGC019` が答えとなります。

```input3
1
```

```output3
AGC001
```

問題文にある通り、 $1$ 回目の AGC のコンテスト名は `AGC001` です。<br>
数が $3$ 桁になるようにゼロ埋めを行う必要があるのに注意してください。

```input4
50
```

```output4
AGC051
```