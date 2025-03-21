配点 : $100$ 点

## 問題文

高橋君はたこ焼きを作ってすぬけ君に振る舞うことにしました。高橋君はすぬけ君に、たこ焼きを食べたいならば左手のみを挙げて、そうでないならば右手のみを挙げるよう指示しました。

すぬけ君が挙げた手の情報は整数 $L, R$ によって与えられます。
すぬけ君は $L = 1$ のとき、またそのときに限り左手を挙げており、$R = 1$ のとき、またそのときに限り右手を挙げています。すぬけ君は指示に従わず、両手を挙げることも手を挙げないこともあります。

すぬけ君が片方の手のみを挙げている場合、すぬけ君がたこ焼きを食べたいならば `Yes` を、そうでないならば `No` を出力してください。すぬけ君が両手を挙げているか、手を挙げていないときは `Invalid` と出力してください。

ただし、すぬけ君が片方の手のみを挙げている場合は必ず指示に従った行動を取っているものとします。

## 制約

- $L, R$ は $0$ または $1$

## 入力

入力は以下の形式で標準入力から与えられる。

> $L$ $R$

## 出力

問題文の指示に従って `Yes`, `No`, `Invalid` のいずれかを出力せよ。

```input1
1 0
```

```output1
Yes
```

すぬけ君はたこ焼きを食べたいので左手のみを挙げています。

```input2
1 1
```

```output2
Invalid
```

すぬけ君は両手を挙げています。