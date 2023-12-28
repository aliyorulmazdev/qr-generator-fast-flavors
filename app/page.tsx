"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ComboboxDemo } from "./_components/combobox";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { QRCode } from "react-qrcode-logo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Input } from "@/components/ui/input";

export default function Home() {
  const [generateForEveryTable, setGenerateForEveryTable] = useState(false);
  const [eyeColor, setEyeColor] = useState("#000000");
  const [eyeRadius, setEyeRadius] = useState(0);
  const [qrStyle, setQrStyle] = useState<"squares" | "dots" | undefined>(
    "squares" // Set the initial value based on your preference
  );
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [fgColor, setFgColor] = useState("#000000");

  const handleSwitchChange = (checked) => {
    setGenerateForEveryTable(checked);
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">QR Code Generator</h1>
      </div>
      <Card className="mx-auto max-w-md">
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center relative">
          <div className="w-40 h-40 bg-gray-100 flex items-center justify-center">
            <QRCode
              value="https://github.com/gcoro/react-qrcode-logo"
              size={150}
              bgColor={bgColor}
              fgColor={fgColor}
              eyeColor={eyeColor}
              eyeRadius={eyeRadius}
              qrStyle={qrStyle}
              logoImage="path_to_your_logo.png"
              logoWidth={30} // Adjust as needed
              logoHeight={30} // Adjust as needed
            />
          </div>
        </CardFooter>
      </Card>
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <Switch
            id="qr-type"
            checked={generateForEveryTable}
            onCheckedChange={handleSwitchChange}
          />
          <Label htmlFor="airplane-mode">Multiple QR</Label>
        </div>
        {generateForEveryTable ? (
          <Button variant="outline" className="ml-5" type="submit">
            Generate QR Code For Every Table
          </Button>
        ) : (
          <>
            <ComboboxDemo />
            <Button variant="outline" className="ml-5" type="submit">
              Generate QR Code For Table
            </Button>
          </>
        )}
      </div>
      <div className="text-center space-y-2">
        <Tabs defaultValue="eyecolor">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="eyecolor">Eye Color</TabsTrigger>
            <TabsTrigger value="eyeradius">Eye Radius</TabsTrigger>
            <TabsTrigger value="qrstyle">QR Style</TabsTrigger>
            <TabsTrigger value="backgroundcolor">Background Color</TabsTrigger>
            <TabsTrigger value="foregroundcolor">Foreground Color</TabsTrigger>
          </TabsList>
          <TabsContent value="eyecolor">
            <Card>
              <CardHeader>
                <CardTitle>Eye Color</CardTitle>
                <CardDescription>
                  Make changes on QR Code Eye Color here
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <label>Eye Color:</label>
                  <input
                    type="color"
                    value={eyeColor}
                    onChange={(e) => setEyeColor(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="eyeradius">
            <Card>
              <CardHeader>
                <CardTitle>Eye Radius</CardTitle>
                <CardDescription>
                  Make changes on QR Code Eye Radius here
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <label>Eye Radius:</label>
                  <input
                    type="number"
                    value={eyeRadius}
                    onChange={(e) => setEyeRadius(Number(e.target.value))}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="qrstyle">
            <Card>
              <CardHeader>
                <CardTitle>QR Style</CardTitle>
                <CardDescription>
                  Make changes on QR Code Style here
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <label>QR Style:</label>
                  <select
                    value={qrStyle || ""}
                    onChange={(e) =>
                      setQrStyle(e.target.value as "squares" | "dots")
                    }
                  >
                    <option value="squares">Squares</option>
                    <option value="dots">Dots</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="backgroundcolor">
            <Card>
              <CardHeader>
                <CardTitle>Background Color</CardTitle>
                <CardDescription>
                  Make changes on Background Color here
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <label>Background Color:</label>
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="foregroundcolor">
            <Card>
              <CardHeader>
                <CardTitle>Foreground Color</CardTitle>
                <CardDescription>
                  Make changes on Foreground Color here
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <label>Foreground Color:</label>
                  <input
                    type="color"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
function CameraIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function QrCodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  );
}
