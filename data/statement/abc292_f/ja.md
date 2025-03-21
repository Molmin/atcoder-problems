配点 : $500$ 点

## 問題文

縦の長さが $A$、横の長さが $B$ の長方形の内部に描ける正三角形の一辺の長さの最大値を求めてください。

## 制約

- $1 \leq A,B \leq 1000$
- $A,B$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $A$ $B$

## 出力

答えを出力せよ。<br>
なお、真の値との絶対誤差または相対誤差が $10^{-9}$ 以下であれば正解として扱われる。

```input1
1 1
```

```output1
1.03527618041008295791
```

下図のように描くのが最適で、一辺の長さが $\sqrt{6} - \sqrt{2}$ になります。

![image](https://img.atcoder.jp/abc292/2cd44ddc3d8241e510a356be9533631f.png)

なお、この出力例の値は $\sqrt{6}- \sqrt{2}$ と厳密には一致しませんが、誤差が $10^{-9}$ 以下なので正解として扱われます。