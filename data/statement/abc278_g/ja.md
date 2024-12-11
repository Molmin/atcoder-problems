配点 : $600$ 点

## 問題文

この問題は **インタラクティブな問題**（あなたの作成したプログラムとジャッジプログラムが標準入出力を介して対話を行う形式の問題）です。

整数 $N, L, R$ が与えられます。<br>
あなたはジャッジシステムと次のゲームで対戦します。

$1$ から $N$ までの番号がついた $N$ 枚のカードが場に置かれています。<br>
先攻から交互に以下の操作を繰り返します。

- $1 \leq x \leq N$, $L \leq y \leq R$ かつカード $x, x+1, \dots, x+y-1$ の $y$ 枚がすべて場に存在するような整数の組 $(x, y)$ を 1 つ選び、カード $x, x+1, \dots, x+y-1$ を場から取り除く。

先に操作が行えなくなった方が負けで、そうでない方が勝ちです。

あなたは先攻か後攻の一方を選んでください。そして、選んだ方の手番でジャッジシステムとゲームをして勝利してください。

## 制約

- $1 \leq N \leq 2000$
- $1 \leq L \leq R \leq N$
- $N, L, R$ は整数

## 入出力

この問題はインタラクティブな問題（あなたの作成したプログラムとジャッジプログラムが標準入出力を介して対話を行う形式の問題）です。

最初に、$N, L, R$ が以下の形式で入力から与えられるので、これを受け取ってください。

```plain
$N$ $L$ $R$
```

まず、あなたは一方の手番を選びます。そして、選んだ手番が先攻ならば `First` を、後攻ならば `Second` を出力してください。

その後、あなたは出力した方の手番で、ジャッジシステムがそうでない方の手番でゲームが直ちに開始されます。あなたはゲームが終了するまで入出力を利用してジャッジシステムと対話をして、ゲームに勝利してください。

あなたは手番が回ってきたら、操作で選ぶ整数の組 $(x, y)$ を次の形式で出力してください。ただし、選ぶことのできる $(x, y)$ が存在しない場合は $(x, y) = (0, 0)$ を出力してください。

```plain
$x$ $y$
```

ジャッジシステムの手番では、ジャッジシステムが以下の形式で整数の組 $(a, b)$ を出力します。

```plain
$a$ $b$
```

ここで $a, b$ は次の 3 種類のいずれかであることが保証されます。

- $(a, b) = (0, 0)$ の場合：ジャッジシステムは操作を行えなくなったことを意味します。つまり、あなたはゲームに勝利しました。
- $(a, b) = (-1, -1)$ の場合：あなたは 1 つ前に非合法な $(x, y)$ を選んだか、あるいは $(0, 0)$ を出力したことを意味します。つまり、あなたはゲームに敗北しました。
- それ以外の場合：ジャッジシステムは $(x,y) = (a,b)$ として操作を行ったことを意味します。ここでジャッジシステムが選んだ $(x, y)$ は合法であることが保証されます。

ジャッジが $(a,b)=(0,0)$ または $(a,b)=(-1,-1)$ を返した場合、ゲームはすでに終了しています。この場合、プログラムをただちに終了してください。

## 注意点

- <span style="color:red">**出力を行うたびに、末尾に改行を入れて標準出力を flush してください。そうしなかった場合、ジャッジ結果が TLE となる可能性があります。**</span>
- **対話の途中で不正な出力を行った、あるいはプログラムが途中で終了した場合のジャッジ結果は不定です。** 特に、プログラムの実行中に実行時エラーが起こった場合に、ジャッジ結果が RE ではなく WA や TLE になる可能性があることに注意してください。
- ゲームが終了したらただちにプログラムを終了してください。そうしない場合、ジャッジ結果は不定です。

## 入出力例

以下は、$N = 6, L = 1, R = 2$ の場合の入出力例です。

入力
出力
説明

`6 1 2`

まず整数 $N, L, R$ が与えられます。

`First`
先攻を選び、ゲームを開始します。

`2 1`
$(x, y) = (2, 1)$ を選び、カード $2$ を取り除きます。

`3 2`

$(x, y) = (3, 2)$ を選び、カード $3, 4$ を取り除きます。

`6 1`
$(x, y) = (6, 1)$ を選び、カード $6$ を取り除きます。

`5 1`

$(x, y) = (5, 1)$ を選び、カード $5$ を取り除きます。

`1 1`
$(x, y) = (1, 1)$ を選び、カード $1$ を取り除きます。

`0 0`

ジャッジシステムは操作を行うことができなくなったので、あなたの勝ちです。