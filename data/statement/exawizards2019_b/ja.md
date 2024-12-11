配点 : $200$ 点

## 問題文

$1$ から $N$ までの番号が割り当てられた $N$ 人の人がいます。それぞれの人は赤い帽子か青い帽子のどちらかを被っています。

$N$ 人の帽子の色を表す文字列 $s$ が与えられます。人 $i$ は、$s_i$ が `R` ならば赤い帽子を、`B` ならば青い帽子を被っています。

赤い帽子を被っている人が青い帽子を被っている人より多いかどうかを判定してください。

## 制約

- $1 \leq N \leq 100$
- $|s| = N$
- $s_i$ は `R` あるいは `B`

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $s$

## 出力

赤い帽子を被っている人が青い帽子を被っている人より多いならば `Yes` を、そうでなければ `No` を出力せよ。

```input1
4
RRBR
```

```output1
Yes
```

- 赤い帽子を被っている人は $3$ 人、青い帽子を被っている人は $1$ 人です。
- 赤い帽子を被っている人の方が青い帽子を被っている人より多いので答えは `Yes` です。

```input2
4
BRBR
```

```output2
No
```

- 赤い帽子を被っている人は $2$ 人、青い帽子を被っている人は $2$ 人です。
- 赤い帽子を被っている人と青い帽子を被っている人が同数なので答えは `No` です。