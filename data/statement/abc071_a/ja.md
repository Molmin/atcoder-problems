配点 : $100$ 点

## 問題文

すぬけ君は，数直線上の位置 $x$ に住んでいます．
また，位置 $a, b$ にはそれぞれ出前を行っている店 $A, B$ が存在します．

すぬけ君は，店 $A, B$ のうち，より近いほうから出前をとることにしました．
どちらの店がすぬけ君の住んでいる位置により近いかを求めてください．

ただし，数直線上の $2$ 点 $s, t$ の間の距離は $|s-t|$ で表されます．

## 制約

- $1 \leq x \leq 1000$
- $1 \leq a \leq 1000$
- $1 \leq b \leq 1000$
- $x, a, b$ は互いに異なる
- すぬけ君の位置から店 $A, B$ までの距離は異なる

## 入力

入力は以下の形式で標準入力から与えられる。

> $x$ $a$ $b$

## 出力

店 $A$ のほうが近いなら `A` を，店 $B$ のほうが近いなら `B` を出力せよ．

```input1
5 2 7
```

```output1
B
```

すぬけ君の位置から店 $A, B$ までの距離はそれぞれ $3, 2$ です．
店 $B$ のほうが近いため `B` を出力します．

```input2
1 999 1000
```

```output2
A
```